import tones from './tones.js'

console.log("Hello world", tones);


//Click event for every "col"
function clickOnTone(event) {
  let audio = new Audio(this.getAttribute('sound'));
  audio.play();
}

//create dom
$(document).ready(function() {
  window.tones = tones;
  let tonesContainer = $('#tones-container');
  for (let tone of tones) {
    let col = $('<div/>',{
      class: 'col-xs-2',
      sound: tone.sound
    });
    let iconContainer = $('<div/>',{
      class: 'iconContainer'
    });
    let img = $('<img/>', {
      class: 'icon glass',
      src: tone.gfx,
      alt: tone.name
    });

    img.appendTo(iconContainer);
    iconContainer.appendTo(col);
    col.appendTo(tonesContainer);

    col.click(clickOnTone);
  }
});
