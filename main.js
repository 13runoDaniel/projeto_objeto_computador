function Computer(desktop, notebook) {
    this.desktop = desktop;
    this.notebook = notebook;
}

function DesktopComputer(desktop, centralProcessingUnits, motherboardBrand, ramMemoryBrand, storageBrand, graphicsProcessingUnits, coolerBrand, powerSupply, cabinetBrand) {
    Computer.call(this, desktop);
    this.centralProcessingUnits = centralProcessingUnits;
    this.motherboardBrand = motherboardBrand;
    this.ramMemoryBrand = ramMemoryBrand;
    this.storageBrand = storageBrand;
    this.graphicsProcessingUnits = graphicsProcessingUnits;
    this.coolerBrand = coolerBrand;
    this.powerSupply = powerSupply;
    this.cabinetBrand = cabinetBrand;

    turnOnOrOff = function () {
        console.log('Ligar / Desligar');
    };
}

function NotebookComputer(notebook, centralProcessingUnits, ramMemoryBrand, storageBrand, graphicsProcessingUnits, keyboard) {
    Computer.call(this, notebook);
    this.centralProcessingUnits = centralProcessingUnits;
    this.ramMemoryBrand = ramMemoryBrand;
    this.storageBrand = storageBrand;
    this.graphicsProcessingUnits = graphicsProcessingUnits;
    this.keyboard = keyboard;

    turnOnOrOff = function () {
        console.log('Ligar / Desligar');
    };
}

const computer_1 = new DesktopComputer(
    'Computador',
    'Intel Core i7 12700KF',
    'MSI Mag B760 Tomahawk',
    'DDR4 SuperFrame RGB',
    'SSD Kingston A400',
    'ASRock Radeon RX 6600 Challenger D',
    'DeepCool High Performance AK400',
    'Duex 600FSE++',
    'Montech Sky Two GX'
);

const computer_2 = new DesktopComputer(
    'Computador',
    'AMD Ryzen 7 5700',
    'SuperFrame B550M Legendary Series',
    'DDR4 XPG Spectrix D41',
    'SSD Adata Legend 800',
    'Gigabyte NVIDIA GeForce RTX 4060 EAGLE OC',
    'Redragon Tyr',
    'Gamemax GX600',
    'SuperFrame Overtake'
);

const notebook_1 = new NotebookComputer(
    'Notebook',
    'Intel Core I5-12450H',
    'DDR4 SO-DIMM SuperFrame',
    'SSD Kingston NV2 1TB NVMe M.2 2280',
    'Gigabyte NVIDIA RTX 4050',
    'Teclado ABNT2 Iluminado'
);
