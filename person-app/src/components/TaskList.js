import React, { useEffect, useState } from 'react';
import { getTasks, updateTask, deleteTask } from '../api';

const TaskList = ({ username, tasks, setTasks }) => {
    const [editingTaskId, setEditingTaskId] = useState(null);
    const [editForm, setEditForm] = useState({
        name: '',
        description: '',
        deadline: ''
    });

    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const tasks = await getTasks(username);
                setTasks(tasks);
            } catch (error) {
                console.error('Error fetching tasks', error);
            }
        };
        fetchTasks();
    }, [username, setTasks]);

    const handleToggleCompleted = async (task) => {
        task.isCompleted = !task.isCompleted;
        try {
            await updateTask(task);
            setTasks(tasks.map(t => (t.id === task.id ? task : t)));
        } catch (error) {
            console.error('Error updating task', error);
        }
    };

    const handleEditTask = (task) => {
        setEditingTaskId(task.id);
        setEditForm({
            name: task.name,
            description: task.description,
            deadline: task.deadline
        });
    };

    const handleSaveEdit = async (task) => {
        try {
            await updateTask({ ...task, ...editForm });
            setTasks(tasks.map(t => (t.id === task.id ? { ...t, ...editForm } : t)));
            setEditingTaskId(null);
        } catch (error) {
            console.error('Error updating task', error);
        }
    };

    const handleDeleteTask = async (taskId) => {
        try {
            await deleteTask(taskId);
            setTasks(tasks.filter(t => t.id !== taskId));
        } catch (error) {
            console.error('Error deleting task', error);
        }
    };

    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };

    return (
        <div className="task-list">
            <h2>Tasks</h2>
            <ul>
                {tasks.map(task => (
                    <li key={task.id} className="task-item">
                        {editingTaskId === task.id ? (
                            <>
                                <input
                                    type="text"
                                    value={editForm.name}
                                    onChange={(e) => setEditForm({ ...editForm, name: e.target.value })}
                                />
                                <input
                                    type="text"
                                    value={editForm.description}
                                    onChange={(e) => setEditForm({ ...editForm, description: e.target.value })}
                                />
                                <input
                                    type="datetime-local"
                                    value={editForm.deadline}
                                    onChange={(e) => setEditForm({ ...editForm, deadline: e.target.value })}
                                />
                                <button onClick={() => handleSaveEdit(task)}>Save</button>
                                <button onClick={() => setEditingTaskId(null)}>Cancel</button>
                            </>
                        ) : (
                            <>
                                {task.name} - {task.isCompleted ? 'Completed' : 'Not Completed'} - Deadline: {formatDate(task.deadline)}
                                <button onClick={() => handleToggleCompleted(task)}>
                                    {task.isCompleted ? 'Mark as Not Completed' : 'Mark as Completed'}
                                </button>
                                <button onClick={() => handleEditTask(task)}>Edit</button>
                                <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
                            </>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TaskList;
