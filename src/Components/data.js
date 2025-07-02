const menus = [
  {
    label: "Settings",
    to: "/settings",
    children: [
      {
        label: "Account",
        to: "account",
        children: [
          // Added children to Account
          {
            label: "Email Preferences",
            to: "account/email",
          },
          {
            label: "Notifications",
            to: "account/notifications",
          },
        ],
      },
      {
        label: "Privacy", // New child
        to: "privacy",
        children: [
          {
            label: "Data Usage",
            to: "privacy/data",
          },
          {
            label: "Third-Party Access",
            to: "privacy/third-party",
          },
        ],
      },
      {
        label: "Security",
        to: "security",
        children: [
          {
            label: "Login",
            to: "login",
            children: [
              // Added children to Login
              {
                label: "Two-Factor Auth",
                to: "login/2fa",
              },
              {
                label: "Password Reset",
                to: "login/password-reset",
              },
            ],
          },
          {
            label: "Register",
            to: "register",
            children: [
              {
                label: "Terms & Conditions", // Renamed and refined
                to: "terms",
              },
              {
                label: "Privacy Policy Link", // New child
                to: "privacy-policy",
              },
            ],
          },
          {
            label: "Device Management", // New child
            to: "device-management",
          },
        ],
      },
      {
        label: "App Settings", // New child
        to: "app-settings",
      },
    ],
  },
  {
    label: "About Us", // New top-level item
    to: "/about",
    children: [
      {
        label: "Our Story",
        to: "our-story",
      },
      {
        label: "Team",
        to: "team",
      },
      {
        label: "Careers",
        to: "careers",
      },
    ],
  },
  {
    label: "Contact", // New top-level item
    to: "/contact",
    children: [
      {
        label: "Support",
        to: "support",
      },
      {
        label: "Sales",
        to: "sales",
      },
    ],
  },
];

export default menus;
