const projectData = [
    {
        title: "Drag System",
        videoSrc: "drag_system.mp4",
        poster: "poster_drag.jpg"
    },
    {
        title: "Steal a Plane",
        videoSrc: "Steal_a_plane.mp4",
        poster: "poster _steal.jpg"
    },
    {
        title: "Progression System",
        videoSrc: "click.mp4",
        poster: "poster_click.jpg"
    },
    {
        title: "Grow a Garden System",
        videoSrc: "GAG.mp4",
        poster: "poster_gag.jpg"
    },
];


document.addEventListener('DOMContentLoaded', () => {
    const overlay = document.getElementById('overlay');
    const overlayVideo = document.getElementById('overlayVideo');

    function setupVideoClicks() {
        const projects = document.querySelectorAll('.project');
        projects.forEach(project => {
            const video = project.querySelector('video');
            project.addEventListener('click', () => {
                overlayVideo.src = video.src;
                overlay.style.display = 'flex';
                overlayVideo.play();
            });
        });
    }

    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
            overlay.style.display = 'none';
            overlayVideo.pause();
            overlayVideo.currentTime = 0;
            overlayVideo.src = '';
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && overlay.style.display === 'flex') {
            overlay.style.display = 'none';
            overlayVideo.pause();
            overlayVideo.currentTime = 0;
            overlayVideo.src = '';
        }
    });

    setupVideoClicks();
});