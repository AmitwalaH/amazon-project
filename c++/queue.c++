#include <iostream>
using namespace std;

class Queue
{
private:
    int *arr;
    int n;
    int front;
    int rear;

public:
    Queue(int size)
    {
        arr = new int[size];
        n = size;
        front = -1;
        rear = -1;
    }

    void push(int val)
    {
        if (rear == n - 1)
        {
            cout << "Queue Overflow" << endl;
        }
        else if (front == -1 && rear == -1)
        {
            front++;
            rear++;
            arr[rear] = val;
        }
        else
        {
            rear++;
            arr[rear] = val;
        }
    }

    void pop()
    {
        if (front == -1 && rear == -1)
        {
            cout << "Queue Underflow" << endl;
        }
        else if (front == rear)
        {
            front = -1;
            rear = -1;
        }
        else
        {
            front++;
        }
    }

    bool isEmpty()
    {
        return (front == -1 && rear == -1);
    }

    int getSize()
    {
        if (front == -1 && rear == -1)
        {
            return 0;
        }
        else
        {
            return rear - front + 1;
        }
    }

    int getFront()
    {
        return arr[front];
    }

    int getRear()
    {
        return arr[rear];
    }
};

int main()
{
    Queue q(5);

    q.push(10);
    q.push(20);
    q.push(30);

    cout << "Front element: " << q.getFront() << endl;
    cout << "Rear element: " << q.getRear() << endl;

    q.pop();

    cout << "After popping one element:" << endl;
    cout << "Front element: " << q.getFront() << endl;
    cout << "Rear element: " << q.getRear() << endl;

    cout << "Queue size: " << q.getSize() << endl;
    cout << "Is queue empty: " << (q.isEmpty() ? "Yes" : "No") << endl;

    return 0;
}