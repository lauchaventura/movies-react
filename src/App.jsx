import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import styles from "./App.module.css"
import { MovieDetails } from "./pages/MoviesDetails";
import { LandingPage } from "./pages/LandingPage";
export function App() {
    return (
        <Router>
            <header>
                <Link to="/">
                    <div>
                        <h1 className={styles.title}>Movies</h1>
                    </div>
                </Link>
            </header>
            <main>
                <Switch>
                    <Route exact path="/movies/:movieId"><MovieDetails /></Route>
                    <Route path="/">
                        <LandingPage />
                    </Route>
                </Switch>
            </main>
        </Router>
    )
}
