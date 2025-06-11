// riskregister.json
export const riskRegisterData = [
  {
    "id": 1,
    "asset": "config.yaml",
    "description": "Configuration file may contain secrets or credentials",
    "threat": "Exposure of sensitive credentials through version control",
    "vulnerability": "No secret scanning implemented",
    "impact": "High",
    "likelihood": "Medium",
    "riskScore": 12,
    "currentControls": [
      "Private GitHub repository",
      ".gitignore excludes .env files"
    ],
    "additionalControls": [
      "Implement secret scanning (e.g., GitHub secret scanning)",
      "Use vault or secret management tools"
    ],
    "residualRisk": "Low",
    "riskOwner": "DevOps Engineer",
    "reviewDate": "2025-06-30"
  },
  {
    "id": 2,
    "asset": "CI/CD Pipeline",
    "description": "Automated pipeline executing on code merge",
    "threat": "Malicious code injection or pipeline compromise",
    "vulnerability": "No code signing or approval gates",
    "impact": "High",
    "likelihood": "Low",
    "riskScore": 9,
    "currentControls": [
      "Branch protection rules",
      "Manual code reviews"
    ],
    "additionalControls": [
      "Add commit signing",
      "Enforce approval before deploy to production"
    ],
    "residualRisk": "Low",
    "riskOwner": "Release Manager",
    "reviewDate": "2025-06-30"
  },
  {
    "id": 3,
    "asset": "npm Dependencies",
    "description": "Third-party modules used in the application",
    "threat": "Inclusion of vulnerable or malicious package",
    "vulnerability": "Dependencies not regularly reviewed",
    "impact": "Medium",
    "likelihood": "High",
    "riskScore": 12,
    "currentControls": [
      "Use of Dependabot",
      "Regular `npm audit` checks"
    ],
    "additionalControls": [
      "Add SCA tool (e.g., Snyk)",
      "Restrict dependency updates to trusted sources"
    ],
    "residualRisk": "Medium",
    "riskOwner": "Software Developer",
    "reviewDate": "2025-06-30"
  },
  {
    "id": 4,
    "asset": "Production Environment",
    "description": "Cloud-based runtime environment",
    "threat": "Unauthorized deployment or access",
    "vulnerability": "Insufficient access control or audit logging",
    "impact": "High",
    "likelihood": "Low",
    "riskScore": 9,
    "currentControls": [
      "MFA enabled on GitHub and cloud",
      "Limited write access to deployment pipeline"
    ],
    "additionalControls": [
      "Enable full audit logging",
      "Conduct periodic access reviews"
    ],
    "residualRisk": "Low",
    "riskOwner": "Cloud Administrator",
    "reviewDate": "2025-06-30"
  }
];

// RiskDashboard.jsx
import React from "react";
import { riskRegisterData } from "./riskregister.json";
import { Card, CardContent } from "@/components/ui/card";

const RiskDashboard = () => {
  return (
    <div className="p-4 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {riskRegisterData.map((risk) => (
        <Card key={risk.id} className="shadow-md border-l-4 border-red-500">
          <CardContent>
            <h2 className="text-lg font-semibold mb-2">{risk.asset}</h2>
            <p><strong>Threat:</strong> {risk.threat}</p>
            <p><strong>Vulnerability:</strong> {risk.vulnerability}</p>
            <p><strong>Impact:</strong> {risk.impact}</p>
            <p><strong>Likelihood:</strong> {risk.likelihood}</p>
            <p><strong>Risk Score:</strong> {risk.riskScore}</p>
            <p><strong>Controls:</strong> {risk.currentControls.join(", ")}</p>
            <p><strong>Additional Controls:</strong> {risk.additionalControls.join(", ")}</p>
            <p><strong>Residual Risk:</strong> {risk.residualRisk}</p>
            <p><strong>Owner:</strong> {risk.riskOwner}</p>
            <p><strong>Next Review:</strong> {risk.reviewDate}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default RiskDashboard;
