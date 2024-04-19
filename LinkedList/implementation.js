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
        this.count = 0;
    }

    addLast = (data) => {
        let temp = new Node(data);
        this.count++;
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
        this.count++;
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

    size = ()=>{
        return this.count;
    }

    /*Now we create third method for deleting in last node from a list */
    removeLastNode = () =>{
        if(this.size() == 0){
            console.log("List is already empty !")
            return;
        }
        else if(this.size()==1){
            this.head = null;
            this.tail =null;
            return;
        }
        else{
            let temp = this.head;
            while(temp.next.next != null){
                temp = temp.next;
            }
            temp.next = null;
            this.tail = temp;
            return;
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
list.removeLastNode();
console.log("After deleteing the node our list is : ")
list.printList();
console.log("Size of the list is : ",list.size())