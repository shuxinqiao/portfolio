function LinkedInClick() {
    window.open("https://www.linkedin.com/in/shuxin-qiao-212265203",'_blank')
};

function GithubClick() {
    window.open("https://github.com/shuxinqiao",'_blank')
};

function ResumeDownloadClick() {
    window.open("../assets/ShuxinQiao_Resume.pdf",'_blank')
};

export function commonAPI() {
    return { LinkedInClick, GithubClick, ResumeDownloadClick };
};