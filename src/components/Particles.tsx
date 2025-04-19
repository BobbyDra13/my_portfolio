import { useEffect, useState, useRef, useCallback ,useMemo} from "react";


function BackgroundAnimation() {
  const svgRef = useRef<SVGSVGElement | null>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [elements, setElements] = useState<Array<{
    id: number;
    x: number;
    y: number;
    size: number;
    color: string;
    opacity: number;
    speed: number;
    direction: number;
  }>>([]);
  const animationFrameId = useRef<number | null>(null);

  // Throttled resize handler
  const handleResize = useCallback(() => {
    if (animationFrameId.current) {
      cancelAnimationFrame(animationFrameId.current);
    }
    
    animationFrameId.current = requestAnimationFrame(() => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    });
  }, []);

  // Update dimensions on window resize
  useEffect(() => {
    // Set initial dimensions
    handleResize();
    
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [handleResize]);

  // Create background elements when dimensions change
  useEffect(() => {
    if (dimensions.width === 0 || dimensions.height === 0) return;
    
    const elementCount = Math.min(Math.floor(dimensions.width * dimensions.height / 20000), 150);
    const newElements = [];
    
    const colorBase = {
      r: 100 + Math.floor(Math.random() * 50),
      g: 100 + Math.floor(Math.random() * 50),
      b: 200 + Math.floor(Math.random() * 55)
    };
    
    for (let i = 0; i < elementCount; i++) {
      const colorVariation = Math.floor(Math.random() * 50);
      newElements.push({
        id: i,
        x: Math.random() * dimensions.width,
        y: Math.random() * dimensions.height,
        size: Math.random() * 3 + 1, // Smaller size for better performance
        color: `rgb(
          ${colorBase.r + colorVariation}, 
          ${colorBase.g + colorVariation}, 
          ${colorBase.b + colorVariation}
        )`,
        opacity: 0.1 + Math.random() * 0.3,
        speed: 0.1 + Math.random() * 0.3, // Slower speed
        direction: Math.random() * Math.PI * 2,
      });
    }
    
    setElements(newElements);
  }, [dimensions]);

  // Animation loop
  useEffect(() => {
    if (elements.length === 0 || !dimensions.width) return;

    let lastTimestamp: number;
    let deltaTime = 0;
    const fps = 30;
    const interval = 1000 / fps;
    
    const animate = (timestamp: number) => {
      if (!lastTimestamp) lastTimestamp = timestamp;
      deltaTime += timestamp - lastTimestamp;
      lastTimestamp = timestamp;
      
      if (deltaTime >= interval) {
        setElements(prevElements => 
          prevElements.map(el => {
            // Move element based on speed and direction
            let newX = el.x + Math.cos(el.direction) * el.speed * (deltaTime / 16);
            let newY = el.y + Math.sin(el.direction) * el.speed * (deltaTime / 16);
            
            // Wrap around edges
            if (newX < -10) newX = dimensions.width + 10;
            if (newX > dimensions.width + 10) newX = -10;
            if (newY < -10) newY = dimensions.height + 10;
            if (newY > dimensions.height + 10) newY = -10;
            
            return { ...el, x: newX, y: newY };
          })
        );
        deltaTime = 0;
      }
      
      animationFrameId.current = requestAnimationFrame(animate);
    };

    animationFrameId.current = requestAnimationFrame(animate);
    
    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [elements.length, dimensions]);
  type Connection = {
    id: string;
    x1: number;
    y1: number;
    x2: number;
    y2: number;
    opacity: number;
  };
  // Generate connections between nearby elements
  const connections: Connection[] = useMemo(() => {
    const maxDistance = Math.min(dimensions.width, dimensions.height) * 0.15;
    const connections = [];
    
    if (elements.length > 0) {
      // Limit the number of checks for performance
      const maxChecks = Math.min(elements.length, 50);
      
      for (let i = 0; i < maxChecks; i++) {
        for (let j = i + 1; j < maxChecks; j++) {
          const dx = elements[i].x - elements[j].x;
          const dy = elements[i].y - elements[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < maxDistance) {
            const opacity = (1 - distance / maxDistance) * 0.2;
            connections.push({
              id: `${i}-${j}`,
              x1: elements[i].x,
              y1: elements[i].y,
              x2: elements[j].x,
              y2: elements[j].y,
              opacity
            });
          }
        }
      }
    }
    
    return connections;
  }, [elements, dimensions]);

  return (
    <svg 
      ref={svgRef}
      className="fixed inset-0 bg-transparent z-[-1] pointer-events-none"
      width={dimensions.width}
      height={dimensions.height}
      preserveAspectRatio="none"
    >
      {/* Draw connections */}
      {connections.map(conn => (
        <line
          key={conn.id}
          x1={conn.x1}
          y1={conn.y1}
          x2={conn.x2}
          y2={conn.y2}
          stroke="#8c8cff"
          strokeOpacity={conn.opacity}
          strokeWidth={0.5}
        />
      ))}
      
      {/* Draw elements */}
      {elements.map(el => (
        <circle
          key={el.id}
          cx={el.x}
          cy={el.y}
          r={el.size}
          fill={el.color}
          opacity={el.opacity}
        />
      ))}
    </svg>
  );
}

export default BackgroundAnimation;