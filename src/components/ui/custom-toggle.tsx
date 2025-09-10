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
          {/* Gradient Border */}
          <div
            className="absolute -inset-0.5 rounded-full"
            style={{
              background: 'linear-gradient(90deg, rgb(255, 47, 47) 0%, rgb(239, 123, 22) 35.8783%, rgb(138, 67, 225) 69.922%, rgb(213, 17, 253) 100%)'
            }}
          />
          
          {/* Toggle Background */}
          <div className="relative w-12 h-6 bg-black rounded-full">
            {/* Toggle Circle */}
            <div
              className={cn(
                "absolute top-0.5 w-5 h-5 bg-white rounded-full transition-all duration-300 ease-out",
                isToggled ? "translate-x-6" : "translate-x-0.5"
              )}
            />
          </div>
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