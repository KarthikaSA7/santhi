function contactForm() {
    document.getElementById("form").style.display = "block";
};

function resumeDownload() {
    var link = document.createElement('a');
    link.href = 'images/Resume.pdf';
    link.download = "Santhi_Resume.pdf";
    link.click();
};

function projectOneDownload() {
    var link = document.createElement('a');
    link.href = 'images/project-1.pdf';
    link.download = "Revit-Plan.pdf";
    link.click();
};

function projectTwoDownload() {
    var link = document.createElement('a');
    link.href = 'images/project-2.pdf';
    link.download = "North-Facing-Plan.pdf";
    link.click();
};

function projectThreeDownload() {
    var link = document.createElement('a');
    link.href = 'images/project-3.pdf';
    link.download = "North-Facing-Plan.pdf";
    link.click();
};
