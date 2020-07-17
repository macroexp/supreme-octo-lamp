import SerialPort from 'serialport';
const Readline = require('@serialport/parser-readline');

const port = new SerialPort("/dev/ttyS3", {
    baudRate: 9600
});

const parser = new Readline();

parser.on('data', (data: string) => {
    parser.add(data);
});