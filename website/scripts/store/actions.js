
export function msg() {
    return {
        type: 'TYPE',
        msg: 'Here we go!'
    };
}

export function markers() {
    return {
        type: 'MAP_MARKERS',
    markers: [
    {
        name: 'Renfrewshire Credit Union',
        body: 'Renfrewshire Wide Credit Union was established in 2006 as a merger of 3 smaller credit unions in Erskine, Renfrew and Linwood which has served the local community for over 30 years.',
        type: 'CU',
        position: { lat: 55.854066, lng: -4.426954 },
        comments: [],
        address: '41 High St, Paisley.',
        link: 'http://www.rwcu.co.uk/'
    },
    {
        name: 'Bank of Scotland',
        body: 'Bank of Scotland was founded in 1695, by an Act of the Scottish Parliament - making it Scotland\'s first and oldest bank. It has enjoyed a long and prestigious history, acquiring many constituent companies along the way.',
        type: 'NB',
        position: { lat: 55.845309, lng: -4.423991 },
        comments: [],
        address: '41 High St, Paisley.',
        link: 'http://www.rwcu.co.uk/'
    },
    {
        name: 'TSB Bank',
        body: 'We provide local banking for Britain to help local people, businesses and communities to thrive together.',
        type: 'NB',
        position: { lat: 55.845309, lng: -4.42597 },
        comments: [],
        address: '41 High St, Paisley.',
        link: 'http://www.rwcu.co.uk/'
    },
    {
        name: 'Santander',
        body: 'We are Santander Bank, one of the country\'s top retail banks by deposits and a wholly owned subsidiary of one of the most respected banks in the world: Banco Santander. Our parent company, Santander Group, serves more than 100 million customers in the United Kingdom, Latin America, and Europe. Here in the Northeast, we are a team of 9,800 individuals all committed to a single mission: to help you make progress toward your goals. We aim to make your banking hassle-free by providing simple ways for you to spend, save and manage your money.',
        type: 'NB',
        position: { lat: 55.84521, lng: -4.424748 },
        comments: [],
        address: '41 High St, Paisley.',
        link: 'http://www.rwcu.co.uk/'
    },
    {
        name: 'Financial Advisor',
        body: 'Financial Advisor Bureau is the free service that connects you with an Independent Financial Advisor (IFA) in your area for a free consultation. All IFA\'s on our panel are registered and regulated by the Financial Conduct Authority, the regulatory body for the financial services industry in the UK.',
        type: 'FA',
        position: { lat: 55.841092, lng: -4.42411 },
        comments: [],
        address: '41 High St, Paisley.',
        link: 'http://www.rwcu.co.uk/'
    },
    {
        name: 'Financial Planning Options',
        body: 'As professional Independent Financial Advisers, Financial Planning Options Limited are authorised to deal with many forms of financial services, and specialise in giving advice to clients on a wide range of subjects to assist with personal and corporate financial planning. We listen to your needs, and offer clear, no-jargon advice on the most appropriate financial products for your personal circumstances.',
        type: 'FA',
        position: { lat: 55.841092, lng: -4.416362 },
        comments: [],
        address: '41 High St, Paisley.',
        link: 'http://www.rwcu.co.uk/'
    },
    {
        name: 'Royal Bank of Scotland',
        body: 'At RBS, our purpose is to serve customers well. We serve around 24 million customers across the globe, and our aim is to consistently meet their needs wherever they find us.',
        type: 'NB',
        position: { lat: 55.847842, lng: -4.42409 },
        comments: [],
        address: '41 High St, Paisley.',
        link: 'http://www.rwcu.co.uk/'
    }
    ]
    };
}