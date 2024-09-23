import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/SEARS - Me entiende.jpeg";
import project4 from "../assets/projects/HungerMap LIVE.jpeg";
import university1 from "../assets/projects/university1.png";
import university2 from "../assets/projects/university2.png";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 5 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCE = [
  {
    year: "2024 - Present",
    role: "Full Stack Developer",
    company: "One Company",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2021 - 2023",
    role: "Bigdata Engineer",
    company: "移通科技有限公司（杭州）",
    description: `业务数据板块规划、对表数据进行 DDL 处理 使用 HQL 处理离线业务需求 使用 SparkSQL 处理实时业务数据 重构现有业务数据代码.`,
    technologies: ["TiDB","Scala", "Flink", "Airflow", "mySQL"],
  },
  {
    year: "2019 - 2021",
    role: "大数据交付工程师",
    company: "软通动力有限公司",
    description: `Poc 数据分析、开发调试、文档编写 数据上云、数仓规划、数据处理、数据质量监控 数据模型、模型工具、任务调度 QBI 报表开发.`,
    technologies: ["MySQL", "Dataphin", "ODPS", "Python", "Pandas", "Numpy"],
  },
];

export const PROJECTS = [
  {
    title: "共富大脑",
    image: project1,
    description:
      "集成黄岩区一体化志愿帮扶驾驶舱、小桔灯系统、瓜果天下系统、智慧寻亲救助应用、宗教场所人员流量监测溯源应用到“共富大脑”的数据仓库中, 完成数据的集成, 并开发设计对应的专题库和画像.",
    technologies: ["Python", "Hive", "Hadoop", "Dataworks", "ODPS"],
    url: "https://www.sohu.com/a/516181111_121123713"
  },
  {
    title: "E家富",
    image: project2,
    description:
      "以全区七十万人口为对象, 通过整合多维数据, 打造个人和家庭富裕程度评估模型, 实现全区群众的贫富度的精准分级和需求分类, 驱动精准施策；并通过与区内多个就业、帮扶赋能应用的多跨协同, 为全区群众提供全地域、全层次、全需求的致富助力, 率先构建标准引领、科学量化的共富参照系.",
    technologies: ["Lead Frontend Developer", "TypeScript", "React", "Node.js", "GraphQL"],
    url: ""
  },
  {
    title: "Carso 数据中台模型开发",
    image: project3,
    description:
      "负责美西Carso数据中台的建设, 数据模型（维度建模）和数据指标的设计开发, 数据治理的治理和数据可视化的实现.",
    technologies: ["Python", "Dataphin", "MaxComputer", "QuickBi", "RDS"],
    url: ""
  },
  {
    title: "WFP HungerMap",
    image: project4,
    description:
      "通过对 90 多个国家的粮食安全状况进行近实时监测, 通过数据模型和算法模型的预测分析, 为更好的决策提供依据.",
    technologies: ["Python", "Dataphin", "Dataworks", "OSS", "ECS"],
    url: ""
  },
  
];

export const EDUCATIONS = [
  {
    title: "中国人民大学",
    image: university1,
    description:"第二学历",
    technologies: ["人力资源"]
  },
  {
    title: "河北工业职业技术大学",
    image: university2,
    description:"第一学历",
    technologies: ["C语言", "计算机", "PLC"]
  },

]

export const CONTACT = {
  address: "Hangzhou, China ",
  phoneNo: "+86 177-xxxx-xxoo ",
  email: "sherlock.xpf@gmail.com",
};
