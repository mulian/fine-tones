export default
class Tone {
  constructor(name) {
    this.name = name;
    this.gfx = 'gfx/'+name.toLowerCase()+'.png';
    this.sound = 'tones/'+name.toLowerCase()+'.mp3';
  }
}
