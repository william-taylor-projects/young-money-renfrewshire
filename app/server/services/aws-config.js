
const express = require('express');
const crypto = require('crypto');
const fs = require('fs');

const decrypt = (text, key) => {
    const decipher = crypto.createDecipher('aes-256-ctr', key)
    let dec = decipher.update(text, 'hex', 'utf8')
    dec += decipher.final('utf8');
    return dec;
}

exports.getConfig = () => {
    const key = process.argv[process.argv.length-1];
    const file = fs.readFileSync(`${__dirname}/../json/config.json`, 'utf8');
    const obj = JSON.parse(file.replace(/^\uFEFF/, ''));

    return {
      secretAccessKey: decrypt(obj.SAK, key),
      accessKeyId: decrypt(obj.AKI, key),
      region: decrypt(obj.REG, key)
    };
  }