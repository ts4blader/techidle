import React from "react";
import Icon from "./Icon";

export default function AuthSection() {
  return (
    <div className="auth-section">
      <div className="facebook-auth auth-item">
        <Icon src="facebook.png" alt="facebook" />
      </div>
      <div className="google-auth auth-item">
        <Icon src="google.png" alt="google" />
      </div>
      <div className="github-auth auth-item">
        <Icon src="github.png" alt="github" />
      </div>
    </div>
  );
}
