import Image from '../../components/Image';
import './index.scss';
import LockScreen from '../../assets/images/lock_screen.jpg';
import { DateTime } from "luxon";
import { useEffect, useState } from 'react';
import { useDrag } from '@use-gesture/react';
import { useSprings, animated } from '@react-spring/web';
import { FormattedMessage } from 'react-intl';
import CameraIcon from '../../components/Icon/camera';
import HeartIcon, { BrokenHeartIcon } from '../../components/Icon/heart';
import { ignoreEvent } from '../../utils';
import { Question } from './utils';
import WifiIcon from '../../components/Icon/wifi';
import BatteryIcon from '../../components/Icon/battery';
import LoginScreen from './login';

const LockScreenTo = (i) => ({
    x: 0,
    y: 0,
    delay: 400,
})

const LockScreenFrom = (i) => ({
    x: 0,
    y: 0,
    delay: 0,
})

const WelcomeScreen = () => {
    const [showLockScreen, setShowLockScreen] = useState(true);
    const [showUserSelectionItems, setShowUserSelectionItems] = useState(false);
    const [props, api] = useSprings(1, i => ({
        ...LockScreenTo(i),
        from: LockScreenFrom(i),
    }))
    const [current, setCurrentTime] = useState(DateTime.local().setZone('UTC+05:30'));
    const dragLockScreen = useDrag((state) => ((state) => {
        const { args, active, velocity, movement } = state;
        const trigger = velocity[1] > 1.6;
        let isShowingLockScreen = showLockScreen;

        if (!active && trigger) {
            /**
             * If button/finger's up and trigger velocity is reached,
             * we flag the Lock Screen ready to fly out
             */
            isShowingLockScreen = false;
            setShowLockScreen(false);
        }

        const index = args[0];
        api.start(i => {
            if (index !== i) return
            let my = movement[1];
            if (my > 0) my = 0;
            let y = !isShowingLockScreen ? window.innerHeight * -2 : active ? my : 0;
            
            if (y < -(window.innerHeight * 0.6)) {
                isShowingLockScreen = false;
                setShowLockScreen(false);
                y = window.innerHeight * -2;
            }

            return {
                x: 0,
                y,
                delay: undefined,
                config: { friction: 0, tension: 0 },
            }
        })
        
    }) (state))

    useEffect(() => {
        const timeout = setInterval(() => {
            setCurrentTime(DateTime.local().setZone('UTC+05:30'));
        }, 10000);

        return () => {
            clearInterval(timeout);
        }
    }, []);

    useEffect(() => {
        if (!showLockScreen) {
            const timeout = setTimeout(() => {
                setShowUserSelectionItems(true); 
            }, 400);

            return () => {
                clearTimeout(timeout);
            }
        }
    }, [showLockScreen]);

    return (
        <div id="WelcomeScreen" onContextMenu={ignoreEvent}>
            <Image
                className={`lock_screen_background ${showUserSelectionItems ? ' blurr' : ''}`}
                src={LockScreen}
                alt="lock screen background"
            />
            {
                props.map(({ x, y }, i) => (
                    <animated.div id="LockScreen" key={i} style={{ x, y }}>
                        <animated.div {...dragLockScreen(i)}>
                            <div className="date-time">
                                <h3>{current.toLocaleString({ hour: '2-digit', minute: '2-digit', hourCycle: 'h24' })}</h3>
                                <p>{current.toLocaleString({ weekday: 'long', month: 'long', day: 'numeric' })}</p>
                            </div>
                            <div className="top-left hidden md:block">
                                <Question
                                    questionId={1}
                                    question={
                                        <FormattedMessage id="lock-screen.question1.question" defaultMessage="Did you know the first computer bug was an actual bug?" />
                                    }
                                    about={
                                        <FormattedMessage id="lock-screen.question1.about" defaultMessage="In 1947, a moth was found causing issues in the Mark II computer, coining the term 'bug.'" />
                                    }
                                    link={
                                        <FormattedMessage id="lock-screen.question1.link" defaultMessage="Meet the famous moth!" />
                                    }
                                />
                            </div>
                            <div className="center hidden md:block">
                                <Question
                                    questionId={2}
                                    question={
                                        <FormattedMessage id="lock-screen.question2.question" defaultMessage="Why do programmers prefer dark mode?" />
                                    }
                                    about={
                                        <FormattedMessage id="lock-screen.question2.about" defaultMessage="Because light attracts bugs! Also, it’s easier on the eyes during late-night coding sessions." />
                                    }
                                    link={
                                        <FormattedMessage id="lock-screen.question2.link" defaultMessage="Discover the truth about dark mode!" />
                                    }
                                />
                            </div>
                            <div className="top-right hidden md:block">
                                <div className="query camera">
                                    <div className="icon">
                                        <CameraIcon />
                                    </div>
                                    <div className="query-information">
                                        <h3 className="ellipsis line-clamp-2">
                                            <FormattedMessage
                                                id="lock-screen.question3.question"
                                                defaultMessage="Like what you see?"
                                            />
                                        </h3>
                                        <div className="image-details">
                                            <h2>Riga, Latvia</h2>
                                            <h4>© Raimond Klavins / Unsplash</h4>
                                        </div>
                                        <hr color="white" />
                                        <div className="buttons">
                                            <button>
                                                <div className="flex flex-row gap-2 align-start">
                                                    <HeartIcon />
                                                    <div className="flex flex-col gap-1">
                                                        <p>
                                                            <FormattedMessage
                                                                id="lock-screen.like.title"
                                                                defaultMessage="I like it!"
                                                            />
                                                        </p>
                                                        <p>
                                                            <FormattedMessage
                                                                id="lock-screen.like.about"
                                                                defaultMessage="We'll keep showing you images like this."
                                                            />
                                                        </p>
                                                    </div>
                                                </div>
                                            </button>
                                            <button>
                                                <div className="flex flex-row gap-2 align-start">
                                                    <BrokenHeartIcon />
                                                    <div className="flex flex-col gap-1">
                                                        <p>
                                                            <FormattedMessage
                                                                id="lock-screen.dislike.title"
                                                                defaultMessage="Not a fan!"
                                                            />
                                                        </p>
                                                        <p>
                                                            <FormattedMessage
                                                                id="lock-screen.dislike.about"
                                                                defaultMessage="We'll switch to a new picture."
                                                            />
                                                        </p>
                                                    </div>
                                                </div>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="control-options">
                                <button><WifiIcon /></button>
                                <button><BatteryIcon /></button>
                            </div>
                        </animated.div>
                    </animated.div>
                ))
            }
            <LoginScreen show={showUserSelectionItems} />
        </div>
    );
}

export default WelcomeScreen;