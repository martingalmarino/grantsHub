# Grants Data Update Guide

## Overview
This guide explains how to keep the grants information up-to-date with real examples, current deadlines, and accurate data.

## Files to Update Regularly

### 1. `/data/grants-data.ts`
This is the main data file containing all grant information. Update quarterly or when major changes occur.

**Sections to update:**
- `springboardCourses[]` - Real course examples with current institutions
- `hciCourses[]` - Advanced course examples with salary ranges
- `evExamples[]` - Current EV models with prices and grant amounts
- `grantDeadlines[]` - Application deadlines and intake dates
- `contentMetadata` - Update dates and verification info

### 2. Verification Process

#### For Education Grants (Springboard+/HCI):
1. **Check Official Sources:**
   - [Springboard+ Courses](https://springboardcourses.ie)
   - [HCI Programs](https://www.hci-skills.ie)
   - [Citizens Information](https://www.citizensinformation.ie)

2. **Verify Information:**
   - Course availability and intake dates
   - Application deadlines
   - Eligibility criteria
   - Funding amounts

3. **Update Examples:**
   - Use real course names and institutions
   - Include current duration and format
   - Research actual salary ranges for graduates
   - Verify employment prospects

#### For EV Grants (SEAI):
1. **Check Official Sources:**
   - [SEAI EV Grant](https://www.seai.ie/grants/electric-vehicle-grant/)
   - [SEAI Home Charger Grant](https://www.seai.ie/grants/electric-vehicle-home-charger-grant/)
   - Authorized dealer websites

2. **Verify Information:**
   - Current grant amounts
   - Eligible vehicle list
   - Application process
   - Processing times

3. **Update Examples:**
   - Use real EV models available in Ireland
   - Include current dealer prices
   - Calculate actual savings with grants
   - Verify availability

### 3. Update Schedule

**Monthly Updates:**
- Check for deadline changes
- Verify grant amounts
- Update application status

**Quarterly Updates:**
- Review course examples
- Update salary ranges
- Refresh EV examples
- Verify all links

**Annual Updates:**
- Complete content audit
- Update all examples
- Refresh verification sources
- Update metadata

### 4. Content Quality Checklist

**Before Publishing Updates:**
- [ ] All links work and are current
- [ ] Dates are accurate and properly formatted
- [ ] Salary ranges are realistic and current
- [ ] Course examples are real and available
- [ ] Grant amounts match official sources
- [ ] Deadlines are verified and current
- [ ] Institution names are correct
- [ ] Last updated dates are set

### 5. Sources for Verification

**Official Government Sources:**
- Springboard+ official website
- HCI official website
- SEAI official website
- Citizens Information
- Department of Education

**Industry Sources:**
- University websites
- College prospectuses
- Job market reports
- Salary surveys (Indeed, Glassdoor)
- EV dealer websites

### 6. Example Update Process

1. **Research Phase:**
   ```
   - Visit official grant websites
   - Check current application deadlines
   - Verify grant amounts
   - Research real course examples
   ```

2. **Data Collection:**
   ```
   - Note current prices and grants
   - Document real course offerings
   - Research salary data
   - Verify institution details
   ```

3. **Update Files:**
   ```
   - Edit grants-data.ts
   - Update lastUpdated dates
   - Verify all information
   - Test components
   ```

4. **Deploy and Verify:**
   ```
   - Deploy changes
   - Test all pages
   - Verify links work
   - Check mobile display
   ```

### 7. Important Notes

- **Always verify with official sources** before updating
- **Use real examples only** - no fictional data
- **Include current dates** for all information
- **Test thoroughly** after updates
- **Document changes** in commit messages
- **Keep backup** of previous data

### 8. Emergency Updates

If urgent updates are needed (e.g., grant amounts change):
1. Update `grants-data.ts` immediately
2. Update `contentMetadata.lastFullUpdate`
3. Deploy changes quickly
4. Notify users if significant changes occur

---

**Last Updated:** January 15, 2025
**Next Scheduled Update:** April 15, 2025
