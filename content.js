const interval = setInterval(() => {
    const header = document.querySelector("._3auIg");
    if (header) {
        clearInterval(interval);

        const chatList = document.getElementsByClassName("_21sW0")[0];

        const button = document.createElement("button");
        button.innerHTML = "2x";
        button.classList.add("speedButton");

        var activated = false;
        button.addEventListener("click", () => {

            activated = !activated;

            if (activated) {
                button.classList.add('active');
                chatList.addEventListener("click", onChatClick)
                speedUp();
            } else {
                speedDown();
                button.classList.remove('active');
                chatList.removeEventListener("click", onChatClick);
            }

        });

        header.appendChild(button);
        const span = document.createElement('span');
        
        header.appendChild(span);
    }

    function onChatClick() {
        document.getElementsByClassName('_2nmDZ')[0].onscroll = function () {
            speedUp();
        }

        speedUpAlreadyLoadedAudios();
    }

    function speedUpAlreadyLoadedAudios() {
        // the chat loading could delay a bit, so we should do some trys
        const maxTrys = 10;
        const millisecondsBetweenTrys = 500;
        var trys = 0;
        const chatInterval = setInterval(() => {
            if (document.querySelectorAll("audio").length > 0 || ++trys == maxTrys) {
                speedUp();
                clearInterval(chatInterval);
            }
        }, millisecondsBetweenTrys);
    }

    function speedUp() {
        changeSpeed(2);
    }

    function speedDown() {
        changeSpeed(1);
    }

    function changeSpeed(playbackRate) {
        const audios = document.querySelectorAll("audio");
        audios.forEach((audio) => {
            audio.playbackRate = playbackRate;
        })
    }
})