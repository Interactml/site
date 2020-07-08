function LoadTeam() {
    $("#load-team").load("_includes/team.html");
}

function LoadNav() {
    $("#load-nav").load("_includes/nav_subpage.html");
}

// Jquery ready
$().ready(function () {
    $("#load-team").load("_includes/team.html");
});

