const logotext = "Arne Hemerijckx";
const meta = {
    title: "Arne",
description: "Arne Hemerijckx",
};

const introdata = {
    title: "I’m Arne Hemerijckx.",
    animated: {
        first: "I'm an electrical engineering student.",
        second: "I'm in my second master.",
        third: "Looking to hire me? : )",
        fourth: "I play spikeball.",
    },
    description: "Motivated Electrical Engineering student at Ghent University. In Ghent during the academic semester, during the weekends and outside of the academic semester in Roosdaal.",
};

const dataabout = {
    title: "A bit about myself",
    aboutme: "I'm an Electrical Engineering student at UGent. I'm currently in my second master of Electronic Circuits and Systems."
    // + "My main interests are ...",
};
const educationtimeline = [
    {
        title: "Science Mathematics",
        where: "Immaculata Maria-Instituut",
        date: "2012 - 2018",
    }, // imi?
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
        electives: ["Advanced Analog Design", "Digital Building Blocks", "Power Electronics", "Avionics", "Display Technology",
             "Audio Engineering"],
    },
];

const skills = [
    {
        name: "ADS",
        value: 70,
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
        title: "Student job NMBS TucRail transformer",
        where: "NMBS CW Mechelen",
        date: "August 2022",
        description: "Design of PCBs to charge electric cars by use of the overhead lines.",
    },
];

const dataprojects = [
    {
        img: "https://picsum.photos/400/?grayscale",
        desctiption: "Audio Amplifier Measurement system PCB",
        link: "",
    },
    {
        img: "https://picsum.photos/400/?grayscale",
        desctiption: "NMBS TucRail transformer",
        link: "",
    },
];

const contactConfig = {
    YOUR_EMAIL: "arne.hemerijckx@gmail.com",
    SECOND_EMAIL: "arne.hemerijckx@ugent.be",
    // YOUR_PHONE: "",
    description: "",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_deb5whs",
    YOUR_TEMPLATE_ID: "template_w3yyysn",
    YOUR_USER_ID: "xe-MAePMnf1QsMWBv",
};

const socialprofiles = {
    facebook: "https://facebook.com/arne.hemerijckx",
    instagram: "https://www.instagram.com/arne_hemerijckx/",
    github: "https://github.com/ahemerijckx",
    linkedin: "https://linkedin.com/in/arne-hemerijckx-27381b268",
};
export {
    meta,
    dataabout,
    dataprojects,
    educationtimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofiles,
    logotext,
};