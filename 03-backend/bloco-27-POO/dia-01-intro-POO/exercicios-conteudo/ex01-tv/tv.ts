class Tv {

  public brand: string;
  private _size: number;
  private _resolution: string;
  private _connections: string;
  private _connectedTo ?: boolean;

constructor(
  tvBrand: string,
  tvSize: number,
  tvResolution: string,
  tvConnections: string,
  tvConnectedTo ?: boolean
) {
  this.brand = tvBrand;
  this._size = tvSize;
  this._resolution = tvResolution;
  this._connections = tvConnections;
  this._connectedTo
}

  get getterConnectedTo(){
  return this._connectedTo
}

  set setterConnectedTo(param: boolean) {
  this._connectedTo = param;
  if (param) console.log('Connected!');
  else console.log('Sorry, connection unavailable!');
}

turnOn() {
  console.log(`
    Marca: ${this.brand},
    Tamanho: ${this._size},
    Resolução: ${this._resolution},
    Conexões: ${this._connections},
    Conectado pela porta: ${this.getterConnectedTo}
    `)
}
}

const tv1 = new Tv('Phillips', 20, '640x480', 'RCA/HDMI');

tv1.brand = 'Sony';
// tv1._size = 27; // atributo privado, não é possível alterá-lo fora da classe
tv1.setterConnectedTo = true;
tv1.turnOn();


