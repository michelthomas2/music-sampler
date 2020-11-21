let audio = document.querySelectorAll('.soundtrack');
let cover = document.querySelectorAll('#albumcover');
let title = document.querySelectorAll('.titles')


function hideAll() {
  audio.forEach(function(el) {
    el.style.display = 'none';
  });
  title.forEach(function(el) {
    el.style.display = 'none';
  });
}


hideAll();

cover.forEach(function(el) {
  el.onclick = (e) => {
    // hide all the divs to ensure that only one will be open
    hideAll('audio');

    // here is a switch statement to handle opening the right div

    switch (e.target.getAttribute('id')) {
      case 'GoLive':
        document.querySelector('#god')
        	.style.display = 'block';
          document.querySelector('#godtitle')
          	.style.display = 'block';
        break;
      case 'Levanter':
        document.querySelector('#stay')
        	.style.display = 'block';
          document.querySelector('#staytitle')
          	.style.display = 'block';
        break;
      case 'SKZ':
        document.querySelector('#voices')
        .style.display = 'block';
        document.querySelector('#voicestitle')
        	.style.display = 'block';
        break;
      case 'Who':
        document.querySelector('#pace')
        .style.display = 'block';
        document.querySelector('#pacetitle')
        	.style.display = 'block';
        break;
    } // end of switch
    // switch does not need default for this
    let players = document.querySelectorAll('audio');
    players.forEach(function(el) {
            el.pause();
            el.currentTime = 0;
        });

  } // end of function for clicking

}); // end of forEach()
