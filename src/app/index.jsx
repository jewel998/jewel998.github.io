import { Route, Routes, useNavigate } from "react-router";
import AppRoutes from '../constants/routes.constant';
import BootScreen from "../pages/boot_screen";
import WelcomeScreen from "../pages/welcome_screen";
import KernelScreen from "../pages/kernel";
import { useEffect } from "react";
import { ignoreEvent } from "../utils";
import { useDispatch } from "react-redux";
import { AudioDecreaseVolume, AudioIncreaseVolume, AudioToggleMute } from '../actions/audio';
import AudioStream from "../components/AudioStream";

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const startFullScreenExperience = () => {
    try {
      const elem = document.body;
      const isFullScreen = window.fullScreen;

      if (!isFullScreen) {
        if (elem.requestFullscreen) {
          elem.requestFullscreen();
        } else if (elem.webkitRequestFullscreen) {
          elem.webkitRequestFullscreen();
        } else if (elem.msRequestFullscreen) {
          elem.msRequestFullscreen();
        }
      }
    } catch (exception) { console.error(exception) }
  }

  const handleCommandsForFasterDevelopment = (event) => {
    const { keyCode } = event;
    // eslint-disable-next-line default-case
    switch (keyCode) {
      case 27: {
        ignoreEvent(event);

        return;
      }
      case 32: {
        ignoreEvent(event);
        if (window.media) {
          if (window.media.audio.paused) {
            window.media.audio.play();
          } else {
            window.media.audio.pause();
          }
        }

        return;
      }
      case 82: {
        navigate(AppRoutes.BootScreen, { replace: true });

        return;
      }
      case 113: {
        ignoreEvent(event);
        dispatch(AudioDecreaseVolume());
        return;
      }
      case 114: {
        ignoreEvent(event);
        dispatch(AudioIncreaseVolume());
        return;
      }
      case 115: {
        ignoreEvent(event);
        dispatch(AudioToggleMute());
        return;
      }
    }
  }

  const handleCommandClearance = (event) => {
    ignoreEvent(event);
  }
  
  const registerEvents = () => {
    if (!window.imersiveMode) {
      document.addEventListener('click', startFullScreenExperience);
      window.imersiveMode = true;
    }

    if (!window.devEventsRegistered) {
      document.addEventListener('keydown', handleCommandsForFasterDevelopment);
      document.addEventListener('keyup', handleCommandClearance);
      window.devEventsRegistered = true;
    }
  }

  useEffect(() => {
    registerEvents();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Routes>
        <Route exact path={AppRoutes.BootScreen} Component={BootScreen} />
        <Route exact path={AppRoutes.WelcomeScreen} Component={WelcomeScreen} />
        <Route exact path={AppRoutes.KernelScreen} Component={KernelScreen} />
      </Routes>
      <AudioStream />
    </>
  );
}

export default App;
