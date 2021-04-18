
import Sidebar from '../Sidebar/Sidebar';

const Dashboard = () => {
    // const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const containerStyle = {
        backgroundColor: "#F4FDFB",
        border: '1px solid red'
    }
    return (
        <section>
            <div style={containerStyle} className="row">
                <div className="col-md-2 col-sm-6 col-12">
                    <Sidebar></Sidebar>
                </div>
            </div>
        </section>
    );
};

export default Dashboard;
