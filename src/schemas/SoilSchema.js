export default class SoilSchema {
    static schema = {
        name: 'Soil',
        primaryKey: 'id',
        properties: {
            id: { type: 'int', indexed: true },
            fazenda: 'string',
            campo: 'string',
            ponto: 'int',
            profundidade: 'float',
            umidade: 'float'
        }
    }
}