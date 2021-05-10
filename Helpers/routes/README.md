# Private & Public Route Config
## Concept:
    Private & Public routes are functional components for react router dom


## Parameters Required:

#### isAunthenticated: Boolean
    

#### Component: functional component
    Component to render if it's private or public




## Basic Usage:
    
    const AppRouter = () => {
        
        const dispatch = useDispatch();
        
        //isLogged change with your auth method
        const [isLogged, setIsLogged] = useState(false);
        
        
        return (
            <Router>
                <div>
                    <Switch>
                        <PublicRoute 
                            path="/auth" 
                            isAuthenticated={isLogged}
                            component={AuthRouter}
                        />
                        
                        <PrivateRoute exact path="/"
                            isAuthenticated={isLogged}
                            component={JournalScreen}
                        />
                        
                        <Redirect to="/auth/login" />
                    </Switch>
                </div>
            </Router>
        )
    }
    
    export default AppRouter