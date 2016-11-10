
import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    display: 'flex',
    flexWrap: 'nowrap',
    overflow: 'auto',
  },
};

const tilesData = [
  {
    img: 'http://placehold.it/250x250',
    title: 'Breakfast',
    author: 'jill111',
  },
  {
    img: 'http://placehold.it/250x250',
    title: 'Tasty burger',
    author: 'pashminu',
  },
  {
    img: 'http://placehold.it/250x250',
    title: 'Camera',
    author: 'Danson67',
  },
  {
    img: 'http://placehold.it/250x250',
    title: 'Morning',
    author: 'fancycrave1',
  },
  {
    img: 'http://placehold.it/250x250',
    title: 'Hats',
    author: 'Hans',
  },
  {
    img: 'http://placehold.it/250x250',
    title: 'Honey',
    author: 'fancycravel',
  },
  {
    img: 'http://placehold.it/250x250',
    title: 'Vegetables',
    author: 'jill111',
  },
  {
    img: 'http://placehold.it/250x250',
    title: 'Water plant',
    author: 'BkrmadtyaKarki',
  },
];

export default class GoodDeals extends React.Component {
    render(){
        const icon = <IconButton><StarBorder color="white" /></IconButton>;
        return (
            <div className='container'>
                <div className="page-header">
                    <h1>Deals</h1>
                </div>
                <div className='row'>
                    <div className='col-md-12'>
                        <h3>Food Deals</h3>
                    </div>
                    <div className='col-md-12'>
                        <div style={styles.root}>
                            <GridList style={styles.gridList} cols={2.2}>
                            {
                                tilesData.map((tile, index) => (
                                    <GridTile key={index} title={tile.title} actionIcon={icon}>
                                        <img src={tile.img} />
                                    </GridTile>
                                ))
                            }
                            </GridList>
                        </div>
                    </div>
                </div>
                <br/>
                <div className='row'>
                    <div className='col-md-12'>
                        <h3>Clothing Deals</h3>
                    </div>
                    <div className='col-md-12'>
                        <div style={styles.root}>
                            <GridList style={styles.gridList} cols={2.2}>
                            {
                                tilesData.map((tile, index) => (
                                    <GridTile key={index} title={tile.title} actionIcon={icon}>
                                        <img src={tile.img} />
                                    </GridTile>
                                ))
                            }
                            </GridList>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-12'>
                        <h3>Local Deals</h3>
                    </div>
                    <div className='col-md-12'>
                        <div style={styles.root}>
                            <GridList style={styles.gridList} cols={2.2}>
                            {
                                tilesData.map((tile, index) => (
                                    <GridTile key={index} title={tile.title} actionIcon={icon}>
                                        <img src={tile.img} />
                                    </GridTile>
                                ))
                            }
                            </GridList>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}