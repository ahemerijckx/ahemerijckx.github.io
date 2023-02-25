import profilepic from './pages/home/img.png'
const logotext = "Arne Hemerijckx";
const meta = {
    title: "Arne Hemerijckx",
    description: "I'm Arne Hemerijckx. This resume is a work in progress",
};

const introdata = {
    title: "I’m Arne Hemerijckx.",
    animated: {
        first: "I love coding",
        second: "I coded this website",
        third: "I design PCBs",
    },
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum",
    your_img_url: profilepic,
};

const dataabout = {
    title: "a bit about my self",
    aboutme: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis dolor id ligula semper elementum feugiat pretium nulla. Nunc non commodo dolor. Nunc mollis dignissim facilisis. Morbi ut magna ultricies.",
};
const worktimeline = [{
        jobtitle: "Student job NMBS TucRail transformer",
        where: "NMBS CW Mechelen",
        date: "August 2022",
    },
];

const skills = [{
        name: "Python",
        value: 90,
    },
];

const services = [{
        title: "Design",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
    },
];

const dataportfolio = [{
        img: "https://picsum.photos/400/?grayscale",
        desctiption: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
];

const contactConfig = {
    YOUR_EMAIL: "arne.hemerijckx@gmail.com",
    YOUR_FONE: "+32 493 49 27 49",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vehicula eu nunc et sollicitudin. Cras pulvinar, nisi at imperdiet pharetra. ",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_id",
    YOUR_TEMPLATE_ID: "template_id",
    YOUR_USER_ID: "user_id",
};

const socialprofils = {
    github: "https://github.com",
    facebook: "https://facebook.com",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
};
export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};