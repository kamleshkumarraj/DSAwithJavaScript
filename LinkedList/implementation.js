class Node{
    constructor(data){
        this.next = null;
        this.data = data;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
    }

    addLast = (data) => {
        let temp = new Node(data);
        if(this.head == null && this.tail == null){
            this.head = temp;
            this.tail = temp;
        }
        else{
            this.tail.next = temp;
            this.tail = temp;
        }
    }

    addFirst = (data) =>{
        const temp = new Node(data);
        if(this.head == null && this.tail == null){
            this.head = temp;
            this.tail = temp;
        }
        else{
            temp.next = this.head;
            this.head = temp;
        }
    }

    printList = ()  => {
        let temp = this.head;
        while(temp != null){
            console.log(temp.data)
            temp = temp.next;
        }
    }
}

const list = new LinkedList();
list.addLast(20);
list.addLast(30);
list.addLast(40);
list.addLast(50);
list.addLast(60);
list.addFirst(90);
list.addFirst(100);
list.printList();