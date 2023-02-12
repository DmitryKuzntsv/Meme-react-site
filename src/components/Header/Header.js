import './Header.css';
export const Header = ({
    isLoggedIn,
    setIsLoggedIn,
    registerLinkVisibility,
    welcomeLinkVisibility,
    isAdminVisibility,
    setIsAdmin
}) => {
    const handleExit = (e) =>{
        e.preventDefault();
        localStorage.setItem('isLoggedIn', false)
        setIsLoggedIn(false);
        setIsAdmin(false);
        localStorage.setItem('userName', '');
    }
    registerLinkVisibility = !isLoggedIn? 'visible':'hidden';
    welcomeLinkVisibility = isLoggedIn? 'visible':'hidden';
    isAdminVisibility =(localStorage.getItem('isAdmin') === 'true')?'visible':'hidden';
    return (
       
           <div className='App-header'> 
            <a class = "menu" href = "/"  >Main</a>
            <a class = "menu" href = "/login" style={{visibility:registerLinkVisibility}}>
                Регистрация</a> 

            

            <a class = "menu" href = "/review">Отзывы</a>
            <a class = "menu" href = "/quiz">Квиз</a>
            <a class = "menu" href = "/blog">Блог</a>
            <a class  = "menu" href = "/gallery">Галерея</a>
            <a className='welcome' style={{visibility:welcomeLinkVisibility}}>
                Добро&nbsp;пожаловать,&nbsp;{localStorage.getItem('userName')}!&nbsp;У Вас 0 баллов&nbsp;
            <a className = "menu" href = "/">Главная</a>
        
            <button onClick={handleExit}>закрыть</button>

            </a>
            <a className='welcome' style={{visibility: isAdminVisibility}} >
                &nbsp; Удачного программирования, админ!!! Эта надпись тут надолго;)
            </a>
          </div>
         
    )
}
