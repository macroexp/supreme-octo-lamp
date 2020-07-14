import SerialPort from "serialport";

class SerialParser {
    private _accumulator: string = '';
    private _lightState: number = 0;

    public get lightState() {
        return this._lightState;
    }
    public add = (input: string) => {
        this._accumulator += input;
        if (this.checkIsDone()){
            console.log(this.lightState);
            this.reset();
        }
    }

    private checkIsDone = () => {
        const result = this._accumulator.match(/(?<key>\w*): (?<value>\d{1,})/)
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
}

const port = new SerialPort("/dev/ttyS3", {
    baudRate: 9600
})

const parser = new SerialParser();

port.on('data', (data) => {
    data = data.toString('utf-8');
    parser.add(data);    
})
