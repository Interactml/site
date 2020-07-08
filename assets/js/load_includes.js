function LoadTeam() {
    $("#load-team").load("sections/team.html");
}

function LoadNav() {
    $("#load-nav").load("sections/nav_subpage.html");
}

// Jquery ready
$().ready(function () {
    $("#load-team").load("sections/team.html");
});

