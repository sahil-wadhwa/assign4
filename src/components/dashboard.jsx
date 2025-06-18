import React from "react";
import { Card, CardContent } from "@/components/ui/card";

export const Dashboard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {["Users", "Sales", "Performance", "Alerts"].map((title, i) => (
        <Card key={i} className="p-4">
          <CardContent>
            <h2 className="text-lg font-semibold">{title}</h2>
            <p className="text-gray-600 dark:text-gray-300">Some stat value</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};