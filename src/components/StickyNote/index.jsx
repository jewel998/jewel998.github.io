import { useEffect, useRef, useState } from "react";
import './index.scss';
import StickyNoteImage from '../../assets/images/sticky_note.png';
import { ignoreEvent } from '../../utils';

const StickyNote = ({ rotate = 6 }) => {
    const ref = useRef();
    const [expand, setExpand] = useState(false);
    const [position, ] = useState({ x: window.innerWidth - 200, y: 200 });

    const getPositionX = () => {
        return ((position.x / window.innerWidth) * 100) + '%';
    }

    const getPositionY = () => {
        return ((position.y / window.innerHeight) * 100) + '%';
    }

    const setup = () => {
        if (ref.current) {
            const canvas = ref.current;
            const ctx = canvas.getContext('2d');
            let drawColor = "black";
            
            var image = new Image();
            image.onload = function() {
                ctx.drawImage(image, 0, 0);
            };
            image.src = StickyNoteImage;

            let lastX = 0, lastY = 0, lineThickness = 1, painting = false;

            
            const handleMouseMove = (e) => {
                ignoreEvent(e);
                if (painting) {
                    const rect = canvas.getBoundingClientRect();
                    const mouseX = e.pageX - rect.left;
                    const mouseY = e.pageY - rect.top;

                    // find all points between        
                    let x1 = mouseX,
                        x2 = lastX,
                        y1 = mouseY,
                        y2 = lastY;


                    const steep = (Math.abs(y2 - y1) > Math.abs(x2 - x1));
                    if (steep) {
                        let x = x1;
                        x1 = y1;
                        y1 = x;

                        let y = y2;
                        y2 = x2;
                        x2 = y;
                    }
                    if (x1 > x2) {
                        let x = x1;
                        x1 = x2;
                        x2 = x;

                        let y = y1;
                        y1 = y2;
                        y2 = y;
                    }

                    let dx = x2 - x1,
                        dy = Math.abs(y2 - y1),
                        error = 0,
                        de = dy / dx,
                        yStep = -1,
                        y = y1;
                    
                    if (y1 < y2) {
                        yStep = 1;
                    }
                
                    lineThickness = 4 - Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1)) / 10;
                    if (lineThickness < 0.75) {
                        lineThickness = 0.75;
                    }

                    ctx.fillStyle = drawColor;
                    ctx.beginPath();
                    
                    for (let x = x1; x < x2; x++) {
                        if (steep) {
                            ctx.arc(y, x, lineThickness, 0, 2 * Math.PI);
                        } else {
                            ctx.arc(x, y, lineThickness, 0, 2 * Math.PI);
                        }
                        
                        error += de;
                        if (error >= 0.5) {
                            y += yStep;
                            error -= 1.0;
                        }
                    }
                    
                    ctx.fill();
                    lastX = mouseX;
                    lastY = mouseY;

                }
            }

            const handleMouseDown = (e) => {
                ignoreEvent(e);
                painting = true;
                ctx.fillStyle = drawColor;
                const rect = canvas.getBoundingClientRect();
                lastX = e.pageX - rect.left;
                lastY = e.pageY - rect.top;
            }

            const handleMouseUp = (e) => {
                ignoreEvent(e);
                painting = false;
            }

            const handleContextMenu = (e) => {
                ignoreEvent(e);
                ctx.clearRect(0, 0, canvas.width, canvas.height);
            }

            const init = () => {
                canvas.addEventListener('mousedown', handleMouseDown);
                canvas.addEventListener('mouseup', handleMouseUp);
                canvas.addEventListener('mousemove', handleMouseMove);
                canvas.addEventListener('contextmenu', handleContextMenu);
            }

            const out = () => {
                canvas.removeEventListener('mousedown', handleMouseDown);
                canvas.removeEventListener('mouseup', handleMouseUp);
                canvas.removeEventListener('mousemove', handleMouseMove);
                canvas.removeEventListener('contextmenu', handleContextMenu);
            }

            return [init, out];
        }

        return null;
    }

    useEffect(() => {
        const response = setup();

        if (response) {
            const [init, out] = response;

            init();

            return out;
        }
    }, [])

    return (
        <div
            tabIndex={0}
            className={`__sticky_note ${expand ? 'focus': ''}`}
            style={{
                top: getPositionY(),
                left: getPositionX(),
                transform: `translate(-50%, -50%) rotate(${rotate}deg)`
            }}
            onFocus={() => setExpand(previous => !previous)}
            onBlur={() => setExpand(previous => !previous)}
        >
            <canvas ref={ref} height={500} width={480} className="note" onClick={ignoreEvent} />
        </div>
    )
}

export default StickyNote;