import * as React from "react";
import { cn } from "@/lib/utils";

interface CustomToggleProps {
  isToggled: boolean;
  onToggle: () => void;
  leftLabel?: string;
  rightLabel?: string;
  className?: string;
}

const CustomToggle = React.forwardRef<HTMLDivElement, CustomToggleProps>(
  ({ isToggled, onToggle, leftLabel, rightLabel, className }, ref) => {
    return (
      <div className={cn("inline-flex items-center gap-4", className)} ref={ref}>
        {leftLabel && (
          <button
            onClick={onToggle}
            className={cn(
              "px-6 py-2 text-sm font-medium transition-all duration-300",
              !isToggled ? "text-foreground" : "text-muted-foreground hover:text-foreground"
            )}
          >
            {leftLabel}
          </button>
        )}
        
        <div
          className="relative cursor-pointer"
          onClick={onToggle}
        >
          {/* Container */}
          <div className="w-16 h-8 rounded-full" style={{ backgroundColor: 'rgb(17, 17, 17)' }}>
            {/* Toggle Shape */}
            <div
              className={cn(
                "absolute top-1 w-6 h-6 bg-white rounded-full transition-all duration-300 ease-out",
                "shadow-[0px_2px_2px_0px_rgba(0,0,0,0.3)]",
                isToggled ? "translate-x-8" : "translate-x-1"
              )}
            />
          </div>
          
          {/* Gradient */}
          <div
            className="absolute inset-0 rounded-lg opacity-80"
            style={{
              background: 'linear-gradient(90deg, rgb(255, 47, 47) 0%, rgb(239, 123, 22) 35.8783%, rgb(138, 67, 225) 69.922%, rgb(213, 17, 253) 100%)',
              borderRadius: '9px'
            }}
          />
        </div>

        {rightLabel && (
          <button
            onClick={onToggle}
            className={cn(
              "px-6 py-2 text-sm font-medium transition-all duration-300",
              isToggled ? "text-foreground" : "text-muted-foreground hover:text-foreground"
            )}
          >
            {rightLabel}
          </button>
        )}
      </div>
    );
  }
);

CustomToggle.displayName = "CustomToggle";

export { CustomToggle };