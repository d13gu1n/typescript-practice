// Recursive Interfaces test
interface ListNode {
    value: number;
    next?: ListNode;
}

const node1: ListNode = { value: 1 };
const node2: ListNode = { value: 2, next: node1 };
console.log("🚀 ~ node2:", node2);

// Recursive Type Aliases test
type TreeNode = {
    value: string,
    children?: TreeNode[],
};

const tree: TreeNode = {
    value: "root",
    children: [
        {
            value: "child1",
            children: [{
                value: "grandchild1"
            },]
        },
        {
            value: "child2",
        },
    ],
};
console.log("🚀 ~ tree:", tree);

// Recursive Types with Generics test
interface GenericListNode<T> {
    value: T;
    next?: GenericListNode<T>;
}

const anuddaNode1: GenericListNode<number> = { value: 123 };
const anuddaNode2: GenericListNode<number> = { value: 456, next: anuddaNode1 };
console.log("🚀 ~ anuddaNode2:", anuddaNode2);

// Recursive Types for Function Definitions test
type RecursiveFunction = () => RecursiveFunction | null;

const recursiveFunction: RecursiveFunction = () => {
    let stopCondition: boolean = true;
    for (let i: number = 0; i <= 100; i++) {
        if (i % 5 === 0 && i !== 100) {
            stopCondition = false;
        }
        else {
            stopCondition = true;
        }
        console.log("🚀 ~ recursiveFunction ~ i:", i);
        console.log("🚀 ~ recursiveFunction ~ stopCondition:", stopCondition);
    }
    return stopCondition ? null : recursiveFunction;
};
console.log("🚀 ~ recursiveFunction ~ recursiveFunction:", recursiveFunction());

