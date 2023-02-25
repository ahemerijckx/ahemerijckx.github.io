const logotext = "Arne Hemerijckx";
const meta = {
    title: "Arne",
    description: "I'm Arne Hemerijckx. This resume is a work in progress.",
};

const introdata = {
    title: "I’m Arne Hemerijckx.",
    animated: {
        first: "I'm an electrical engineering student.",
        second: "I'm in my second master.",
        third: "I design PCBs.",
        fourth: "Looking to hire me?",
    },
    description: "This resume is a work in progress.",
};

const dataabout = {
    title: "A bit about myself",
    aboutme: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis dolor id ligula semper elementum feugiat pretium nulla. Nunc non commodo dolor. Nunc mollis dignissim facilisis. Morbi ut magna ultricies.",
};
const educationtimeline = [
    // {
    //     title: "Bachelor of Science in Engineering:",
    //     subtitle: "Electrical Engineering",
    //     where: "Ghent University",
    //     date: "2018 - 2022",
    // }, // imi?
    {
        title: "Bachelor of Science in Engineering:",
        subtitle: "Electrical Engineering",
        where: "Ghent University",
        date: "2018 - 2022",
    },
    {
        title: "Master of Science in Electrical Engineering:",
        subtitle: "Electronic Circuits and Systems",
        where: "Ghent University",
        date: "2018 - 2022",
    },
];

const skills = [
    {
        name: "ADS",
        value: 90,
    },
    {
        name: "CST",
        value: 40,
    },
    {
        name: "KiCad, EasyEDA",
        value: 90,
    },
    {
        name: "Cadence",
        value: 30,
    },
    {
        name: "Python",
        value: 90,
    },
    {
        name: "C, C++",
        value: 70,
    },
    {
        name: "MATLAB",
        value: 70,
    },
    {
        name: "VHDL",
        value: 30,
    },
    {
        name: "LabView",
        value: 50,
    },
];

const services = [{
        title: " Student job NMBS TucRail transformer",
        where: "NMBS CW Mechelen",
        date: "August 2022",
        description: "Design of PCBs to charge electric cars by use of the overhead lines.",
    },
];

const dataportfolio = [{
        img: "https://picsum.photos/400/?grayscale",
        desctiption: "Audio Amplifier Measurement system PCB",
        link: "#",
    },
];

const contactConfig = {
    YOUR_EMAIL: "arne.hemerijckx@gmail.com",
    YOUR_FONE: "+32 493 49 27 49",
    description: "The email function is not working yet.",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_id",
    YOUR_TEMPLATE_ID: "template_id",
    YOUR_USER_ID: "user_id",
};

const socialprofils = {
    facebook: "https://facebook.com/arne.hemerijckx",
    instagram: "https://www.instagram.com/arne_hemerijckx/",
    github: "https://github.com/ahemerijckx",
    linkedin: "https://linkedin.com",
};
export {
    meta,
    dataabout,
    dataportfolio,
    educationtimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};