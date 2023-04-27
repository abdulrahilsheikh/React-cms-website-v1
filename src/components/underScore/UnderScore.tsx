import { motion } from "framer-motion";
export const UnderScore = ({
  className,
  style,
  layoutId,
}: {
  className: string;
  layoutId: string;
  style: any;
}) => (
  <motion.div
    layoutId={layoutId}
    className={className}
    style={style}
    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
  />
);
