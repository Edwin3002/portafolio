import React from "react";
import { useState } from "react";
import { motion, AnimateSharedLayout } from "framer-motion";

/**
 * This is an example of animating between different components in Framer Motion 2.
 *
 * By wrapping a tree with AnimateSharedLayout, children can be given a layoutId.
 *
 * When a component with a layoutId is removed and a new one with the same layoutId
 * is added elsewhere, the new component will animate from the old one.
 *
 * The outline being animated here is four different components, animated like one.
 */

export default function App() {
    const [selected, setSelected] = useState(colors[0]);

    return (
        <AnimateSharedLayout>
            <ul>
                {colors.map(color => (
                    <Item
                        key={color}
                        color={color}
                        isSelected={selected === color}
                        onClick={() => setSelected(color)}
                    >
                        <div>ss</div>
                        <div>ss</div>
                        <div>ss</div>
                    </Item>
                ))}
            </ul>
        </AnimateSharedLayout>
    );
}

function Item({ color, isSelected, onClick }) {
    return (
        <li className="item" onClick={onClick} style={{ backgroundColor: color }}>
            {isSelected && (
                <motion.div
                    layoutId="outline"
                    className="outline"
                    initial={false}
                    animate={{ borderColor: color }}
                    transition={spring}
                />
            )}
        </li>
    );
}

const colors = ["#ff0055", "#0099ff", "#22cc88", "#ffaa00"];

const spring = {
    type: "spring",
    stiffness: 500,
    damping: 30
};
