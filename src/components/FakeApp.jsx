export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="/GameBoard" element={<GameBoard />} />
                <Route path="/RoomTwo" element={<RoomTwo />} />
                <Route path="/RoomThree" element={<RoomThree />} />
                <Route path="/RoomFour" element={<RoomFour />} />
                <Route path="/RoomFive" element={<RoomFive />} />
                <Route path="/RoomSix" element={<RoomSix />} />
                <Route path="/RoomSeven" element={<RoomSeven />} />
                <Route path="/RoomEight" element={<RoomEight />} />
                <Route path="/RoomNine" element={<RoomNine />} />
                <Route path="/RoomTen" element={<RoomTen />} />
                <Route path="/RoomEleven" element={<RoomEleven />} />
                <Route path="/RoomTwelve" element={<RoomTwelve />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

ReactDOM.render(<App />, document.getElementById("root"));


//This bit goes in the Home tab (Works)

/*
function Home() {
    return (
        <nav>
            <h1>This is the homepage</h1>
            <ul>
                <li>
                    <Link to="/GameBoard">Return to room one</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Home;
/*