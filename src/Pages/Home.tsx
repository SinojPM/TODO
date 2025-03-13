import { Menu } from "@mantine/core"
import Add from "../components/Add"
import ListItem from "../components/ListItem"
import { useContext, useEffect, useState } from "react"
import { UserData, ListData } from "../interfaces/interface"
import { useNavigate } from "react-router"
import { LoginState } from "../interfaces/interface.tsx"
import { AuthenticationContext } from "../context/AuthContext"
useContext
const Home = () => {
    const [userDetails, setUserDetails] = useState<UserData>({ username: "", email: "" })
    const [todoList, setTodoList] = useState<ListData[] | []>([])
    const { setIslogined } = useContext<LoginState>(AuthenticationContext)

    const navigate = useNavigate()


    useEffect(() => {
        setUserDetails({ email: sessionStorage.getItem("email"), username: sessionStorage.getItem("username") })
    }, [])

    const list = todoList?.filter((item) => item.status == "list")
    const onGoingList = todoList?.filter((item) => item.status == "ongoing")
    const completedList = todoList?.filter((item) => item.status == "completed")

    const handleLogout = () => {
        sessionStorage.clear()
        setIslogined(false)
        navigate("/login")
    }

    const handleUpdateList = (data: ListData) => {
        setTodoList([...todoList, data])


    }

    const updateStatusToOngoing = (id: number) => {
        setTodoList(prevUsers =>
            prevUsers.map(user =>
                user.id === id ? { ...user, status: "ongoing" } : user
            )
        );
    }

    const updateStatusToComplete = (id: number) => {
        setTodoList(prevUsers =>
            prevUsers.map(user =>
                user.id === id ? { ...user, status: "completed" } : user
            )
        );

    }

    const handleDelete = (id: number) => {
        console.log(id);
        console.log(todoList);

        setTodoList(prevList =>
            prevList.filter(item => item.id !== id)
        );
        console.log(todoList);

    }





    return (
        <div className="home-container">
            <div className="home-wrapper">
                <div className="home-header">
                    <h1>TO DO</h1>
                    <Menu trigger="hover" openDelay={100}>
                        <Menu.Target>
                            <div className="button">{userDetails.username}</div>
                        </Menu.Target>
                        <Menu.Dropdown>
                            <Menu.Item onClick={()=>navigate('form')}>
                                Form
                            </Menu.Item>
                            <Menu.Item onClick={handleLogout}>
                                Logout
                            </Menu.Item>
                        </Menu.Dropdown>
                    </Menu>
                </div>
                <div className="home-content-wraper">
                    <div className="content-part todo-container">
                        <h2>List</h2>
                        <div className="add">
                            <Add todoList={todoList} handleUpdateList={handleUpdateList} />
                        </div>
                        <div className="list-items">
                            {
                                list.length > 0 ?
                                    list.map((item, index) => (
                                        <ListItem handleDelete={handleDelete} updateStatus={updateStatusToOngoing} isList={true} key={index} index={index} data={item} />
                                    ))
                                    :
                                    <div>No items</div>
                            }

                        </div>
                    </div>
                    <div className="content-part content-part-2">
                        <div className="home-part2-parts ongoing ">
                            <h2>Ongoing</h2>
                            <div className="list-items">
                                {
                                    onGoingList.length > 0 ?
                                        onGoingList.map((item, index) => (
                                            <ListItem handleDelete={handleDelete} updateStatus={updateStatusToComplete} isOngoing={true} key={index} index={index} data={item} />
                                        ))
                                        :
                                        <div>No items</div>
                                }

                            </div>
                        </div>
                        <div className="home-part2-parts completed">
                            <h2>Completed</h2>
                            <div className="list-items">
                                {
                                    completedList.length > 0 ?
                                        completedList.map((item, index) => (
                                            <ListItem handleDelete={handleDelete} updateStatus={updateStatusToComplete} key={index} index={index} data={item} />
                                        ))
                                        :
                                        <div>No items</div>
                                }

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home