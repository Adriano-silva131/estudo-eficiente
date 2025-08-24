import React from "react";
import PropTypes from "prop-types";
import { cn } from "../../lib/utils";

const PageLayout = ({
  children,
  title,
  subtitle,
  headerActions,
  className,
  contentClassName,
  showDivider = true,
}) => {
  return (
    <div className={cn("space-y-6", className)}>
      {(title || headerActions) && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              {title && (
                <h1 className="text-2xl font-semibold tracking-tight">
                  {title}
                </h1>
              )}
              {subtitle && (
                <p className="text-sm text-muted-foreground">{subtitle}</p>
              )}
            </div>
            {headerActions && (
              <div className="flex items-center space-x-2">{headerActions}</div>
            )}
          </div>
          {showDivider && <div className="border-b" />}
        </div>
      )}
      <div className={cn("space-y-6", contentClassName)}>{children}</div>
    </div>
  );
};

PageLayout.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  headerActions: PropTypes.node,
  className: PropTypes.string,
  contentClassName: PropTypes.string,
  showDivider: PropTypes.bool,
};

export default PageLayout;
