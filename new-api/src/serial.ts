import SerialPort from "serialport";
const Readline = require('@serialport/parser-readline');

class SerialParser {
    private _accumulator: string = '';
    private _lightState: number = 0;

    public get lightState() {
        return this._lightState;
    }
    public add = (input: string) => {
        this._accumulator += input;
        if (this.checkIsDone()){
            //console.log(this._lightState);
            this.reset();
        }
    }

    private checkIsDone = () => {
        const result = this._accumulator.match(/(?<value>\d)/)
        if (result){
            if (result.groups)
                if (result.groups.value)
                    this._lightState = parseInt(result.groups.value);
        }
        return result;
    }

    private reset = () => {
        this._accumulator = '';
    }
};

const port = new SerialPort("/dev/ttyS3", {
    baudRate: 9600
});

const parser = new SerialParser();
const portParser = new Readline();

port.pipe(portParser);
portParser.on('data', (data: string) => {
    parser.add(data);    
});

export default parser