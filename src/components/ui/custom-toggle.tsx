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
          {/* Toggle Background */}
          <div className="w-12 h-6 bg-black rounded-full relative">
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