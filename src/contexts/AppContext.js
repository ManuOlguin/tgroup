import {
  createContext,
  useState,
  useEffect,
  useContext,
  useCallback,
} from 'react';
import axios from 'axios';

const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [shows, setShows] = useState([]);
  const [user, setUser] = useState({});

  const [show, setShow] = useState({});
  const [loading, setLoading] = useState(true);
  const [showLoading, setShowLoading] = useState(true);

  const getShows = useCallback(async () => {
    setLoading(true);
    try {
      const showsReq = await axios.get(
        `https://api.tvmaze.com/search/shows?q=batman`
      );
      setShows(showsReq.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }, []);
  const loginUser = useCallback(async (credentials) => {
    const jsonArmado = JSON.stringify(credentials)
    const headers = { 
			'content-type': 'application/json; charset=utf-8'
			 };
    try {
      axios.post('http://localhost:8080/login', 
        jsonArmado, {headers}
      )
      .then(function (response) {
        setUser(response.data);
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    } catch (error) {
      console.log('ERRORRR user mal');
    }
  }, []);

  useEffect(() => {
    getShows();
  }, [getShows]);

  const getShow = useCallback(async (id) => {
    setShowLoading(true);
    try {
      const show = await axios.get(`https://api.tvmaze.com/shows/${id}`);
      console.log(show.data);
      setShow(show.data);
      setShowLoading(false);
    } catch (error) {
      console.log('ERRORRR NO EXISTE SHOW');
    }
  }, []);


  return (
    <AppContext.Provider
      value={{
        shows,
        loading,
        getShow,
        loginUser,
        user,
        show,
        showLoading,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContexts must be used within a AppContextProvider');
  }
  return context;
};

export default AppContext;
