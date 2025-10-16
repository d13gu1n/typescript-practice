//Key-Value Pairs Generic Object Type
type KeyValuePair<T> = {
    key: string;
    value: T;
}

const stringPair: KeyValuePair<string> = { key: "name", value: "John" };
const numberPair: KeyValuePair<number> = { key: "age", value: 30 };

console.log(stringPair);
console.log(numberPair);

// Encapsulating Data Properties
type DataContainer<T> = {
    data: T;
};

const numericData: DataContainer<number> = { data: 25 };
const stringData: DataContainer<string> = { data: "TypeScript" };

console.log(numericData.data);
console.log(stringData.data);

type anuddaDataContainer<DataType> = {
    data: DataType;
    counter: number;
}

const anuddaNumericData: anuddaDataContainer<number> = { data: 35, counter: 1 };
const anuddaStringData: anuddaDataContainer<string> = { data: "JavaScript", counter: 2 };

console.log(anuddaNumericData.data);
console.log(anuddaNumericData.counter);
console.log(anuddaStringData.data);
console.log(anuddaStringData.counter);