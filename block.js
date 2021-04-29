const SHA256 = require ('crypto-js/sha256');

class Block{
//Index= identificador de la posicion del bloque en la cadena
//Data= el contenido del bloque
//PreviousHash= valor del bloque anterior de la cadena

  constructor(index, data, previousHash=''){
    this.index=index;
    this.data=data;
    this.previousHash=previousHash;
    this.date=new Date();
    this.nonce=0;
    this.hash=this.createdHash();
  }

  createdHash(){
    return SHA256(`${this.index} ${this.data} ${this.date} ${this.nonce}`).toString();
  }
//Empiece con un cero el hash
  mine(difficulty){
    while(!this.hash.startsWith(difficulty)){
      this.nonce++;
      this.hash= this.createdHash();
    }
  }

  //0

  //Cifrado
  //Simetrico y asimetrico

  //a SHA256= x
  //a SHA256= x

  //NPM= Node Package manager
  //YARN

}

module.exports=Block;
