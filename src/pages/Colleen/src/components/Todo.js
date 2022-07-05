import React, { useState, useEffect, useRef } from 'react';
import { Modal, Button, Input } from 'antd';
import { MinusOutlined, ExclamationCircleOutlined, EditOutlined } from '@ant-design/icons';
import './Todo.scss';

function Task({ task, index, showEditConfirm, showDeleteConfirm }) {
    return (
        <div className="task">
            <Input value={task.title} disabled />
            <Button type="primary" onClick={() => showEditConfirm(task.title, index)}><EditOutlined /></Button>
            <Button type="primary" danger onClick={() => showDeleteConfirm(index)}><MinusOutlined></MinusOutlined></Button>
        </div>
    );
}

function Todo(prop) {
    const dataTask = prop.tasks;
    const [tasks, setTasks] = useState(dataTask);
    const { confirm } = Modal;
    const inputRef = useRef(null);


    useEffect(() => {
        prop.callback(tasks);
    }, [tasks, prop]);


    const addTask = title => {
        const newTasks = [...tasks, { title, completed: false }];
        setTasks(newTasks);
    };

    const removeTask = index => {
        const newTasks = [...tasks];
        console.log(newTasks[index].title + '已刪除')
        newTasks.splice(index, 1);
        setTasks(newTasks);

    };

    const showDeleteConfirm = index => {
        confirm({
            title: '確定刪除空間嗎?',
            icon: <ExclamationCircleOutlined />,
            content: '空間裡的物品都會一併刪除',
            okText: 'Yes',
            okType: 'danger',
            cancelText: 'No',
            onOk() {
                removeTask(index);
                console.log('OK');
            },
            onCancel() {
                console.log('Cancel');
            },
        });
    };


    const editTask = (title, index) => {
        const value = inputRef.current.state.value;
        if (value !== title && value !== '') {
            const newTasks = [...tasks];
            newTasks[index].title = value;
            setTasks(newTasks);
            console.log(title + ' 已修改為 ' + value)
        }
    };

    const showEditConfirm = (title, index) => {
        confirm({
            title: '編輯空間',
            icon: <ExclamationCircleOutlined />,
            content: <Input defaultValue={title} allowClear ref={inputRef} />,
            okText: 'Yes',
            okType: 'danger',
            cancelText: 'No',
            onOk() {
                editTask(title, index);
                console.log('OK');
            },
            onCancel() {
                console.log('Cancel');
            },

        });
    };



    return (
        <div className="todo-container">
            <div className="tasks">
                {tasks.map((task, index) => (
                    <Task
                        task={task}
                        index={index}
                        showDeleteConfirm={showDeleteConfirm}
                        showEditConfirm={showEditConfirm}
                        key={index}
                    />
                ))}
            </div>
            <div className="create-task" >
                <CreateTask addTask={addTask} />
            </div>
        </div>
    );
}



function CreateTask({ addTask }) {
    const [value, setValue] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        if (!value) return;
        addTask(value);
        setValue("");
    }

    return (
        <form onSubmit={handleSubmit}>
            <Input
                type="text"
                className="input"
                value={value}
                placeholder="Add a new space"
                onChange={e => setValue(e.target.value)}
            />
        </form>
    );
}
export default Todo;