#!/usr/bin/env python3
"""
Setup Daily Cron Script
Configures a Mac crontab entry to run `run_seo_automation.command` automatically every single day in the background at 10:00 AM.
"""

import os
import subprocess
from pathlib import Path

PROJECT_ROOT = Path(__file__).resolve().parent.parent
COMMAND_PATH = PROJECT_ROOT / 'scripts' / 'run_seo_automation.command'

def setup_cron():
    cron_time = "0 10 * * *"
    cron_command = f"{cron_time} /bin/bash '{COMMAND_PATH}' > /dev/null 2>&1"
    
    try:
        # Get existing crontab
        result = subprocess.run(["crontab", "-l"], capture_output=True, text=True)
        current_crontab = result.stdout if result.returncode == 0 else ""
        
        # Check if entry already exists
        if str(COMMAND_PATH) in current_crontab:
            print(f"✅ Daily Cron job is ALREADY installed for: {COMMAND_PATH}")
            return
            
        # Append new cron job
        new_crontab = current_crontab.rstrip() + f"\n{cron_command}\n"
        
        # Install new crontab
        proc = subprocess.run(["crontab", "-"], input=new_crontab, text=True, capture_output=True)
        if proc.returncode == 0:
            print(f"🎉 Successfully installed daily cron job to run at 10:00 AM every day!\nCommand: {cron_command}")
        else:
            print(f"❌ Failed to set crontab: {proc.stderr}")
    except Exception as e:
        print(f"❌ Error setting up crontab: {e}")

if __name__ == '__main__':
    setup_cron()
