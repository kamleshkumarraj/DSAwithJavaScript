class Node{
    constructor(data){
        this.next = null;
        this.data = data;
    }
}

class LinkedList{
    /**This is constructor method for a class for initialize the required variable. */
    constructor(){
        this.head = null;
        this.tail = null;
        this.count = 0;
    }

    /**This method is used for add a node in last of the list as a tail node in list. */
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

    /**This method is used for add a node in first from a list as a head node in list. */
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

    /**This method is used for printing the current list on our console. */
    printList = ()  => {
        let temp = this.head;
        while(temp != null){
            console.log(temp.data)
            temp = temp.next;
        }
    }

    /*This method used for find the current size of the list. */
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
            this.count--;
            return;
        }
        else{
            let temp = this.head;
            while(temp.next.next != null){
                temp = temp.next;
            }
            temp.next = null;
            this.tail = temp;
            this.count--;
            return;
        }

    }

    /*This method is created for deleting first node from a list. */ 
    removeFirstNode = () =>{
        if(this.size() == 0){
            console.log("List is alreday empty !");
            return;
        }
        else if(this.size() ==1){
            this.head = null;
            this.tail = null;
            this.count--;
            return;
        }
        else{
            let temp = this.head.next;
            this.head.next = null;
            this.head = temp;
            this.count--;
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
console.log("After deleteing the last node our list is : ")
list.printList();
list.removeFirstNode();
console.log("After deleteing the first node our list is : ")
list.printList();
console.log("Size of the list is : ",list.size())