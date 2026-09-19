# Siri Family Dental Homepage

## Goal
Build a warm, trustworthy, mobile-first homepage for Siri Family Dental using only the clinic facts and approved service placeholders provided.

## Page structure
1. **Header and navigation**
   - Clinic name with clear links for Home, About, Services, Why Choose Us, FAQ, and Contact.
   - Prominent “Book an Appointment” action and a compact mobile menu.
   - Unbuilt navigation items will link to relevant homepage content or the contact action rather than dead pages.

2. **Welcome area**
   - Left-aligned headline: “Your Family's Smile Starts Here”.
   - Supplied supporting text, booking button, tap-to-call button, and May Pen trust line.
   - A realistic, high-quality family dental care image on the right with rounded corners and subtle background shapes.
   - On mobile, content stacks vertically with large tap targets.

3. **About section**
   - Two-column composition with dental clinic imagery and concise factual copy.
   - Benefits: Friendly Environment, Family-Focused Care, and Convenient May Pen Location.
   - “Learn More” action linked within the homepage.

4. **Services section**
   - Six editable service cards using the exact supplied categories and descriptions.
   - Simple dental icons, “Learn More” links, and restrained hover movement.
   - No added procedures, promises, qualifications, or clinical claims.

5. **Contact close and footer**
   - Reinforce the appointment and call actions.
   - Display the supplied address, phone number, and opening hours.
   - Keep all contact actions usable on mobile.

## Visual direction
- Clean white foundation with soft blue and teal semantic colors, clear typography, generous whitespace, rounded controls, and family-oriented photography.
- Professional and reassuring without feeling corporate or hospital-like.
- Motion will be subtle and disabled when reduced motion is preferred.

## Technical details
- Use reusable React sections and the existing TanStack/Tailwind structure.
- Generate and locally serve cohesive dental imagery rather than hotlinking images.
- Add accessible labels, keyboard states, contrast, responsive layouts, and stable image dimensions.
- Add unique homepage metadata for search and sharing; retain semantic headings and fast-loading image formats.
- Verify the result at desktop and mobile sizes and resolve any build or visible layout errors.

## Scope assumption
This first build is the homepage. Navigation labels remain visible, while full standalone About, Services, Why Choose Us, FAQ, and Contact pages are deferred until their content is approved.
